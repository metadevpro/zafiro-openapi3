import { OpenApiBuilder, OpenAPIObject, PathItemObject } from "openapi3-ts";
import { interfaces } from "inversify-express-utils";
import { Metadata } from "./interfaces";

export function contractBuilder(userRole: string, metadata: Metadata[]): OpenAPIObject {
    const fullContract = buildFullContract(metadata);
    const constrainedContract = filterContractByRole(fullContract, userRole);
    return constrainedContract;
}

function filterContractByRole(fullContract: OpenAPIObject, userRole: string): OpenAPIObject {
    // todo role-based contract filtering ...
    return fullContract;
}

function buildFullContract(metadata: Metadata[]): OpenAPIObject {
    const builder = OpenApiBuilder.create();
    builder.addTitle("zafiro-services")
           .addDescription("Generated OpenAPI 3.0 contract using reflection over Zafiro anotations")
           .addOpenApiVersion("3.0.1")
           .addInfo({
                title: "zafiro-app",
                version: "1.0.0"
            })
            .addTermsOfService("TOS")
            .addLicense({
                name: "MIT",
                url: "http://mit.edu/license"
            })
            .addContact({
                name: "Alicia",
                email: "alicia@acme.com",
                url: "http://acme.com/~alicia"
            })
            .addServer({
                url: "/"
            })
            ;

    if (metadata) {
        const typeDic: { [key: string]: any } = {};

        metadata.map(mi => {
            const ctlMeta = mi.controllerMetadata;
            const pathItemObject: PathItemObject = {};
            mi.methodMetadata.map(metMeta => {
                buildPathItemObject(ctlMeta, metMeta, pathItemObject, typeDic);
            });
            builder.addPath(mi.controllerMetadata.path, pathItemObject);

        });

        // Build schemas
        Object.keys(typeDic).map(resourceName => {
            const resource = typeDic[resourceName];

            // todo: entity metadata needed here
            builder.addSchema(toPascal(resourceName),
            {
                required: [ "key1" ],
                properties: {
                    key1: {
                        "type": "string"
                        },
                    key2: {
                        type: "number",
                        format: "int32"
                    }
                }
            });
        });

        // builder.addTag();

    }
    return builder.getSpec();
}

function buildResourceName(ctl: interfaces.ControllerMetadata): string {
    const base = ctl.target.name.replace("Controller", "");
    return base;
}
function buildOperationId(met: interfaces.ControllerMethodMetadata, resource: string): string {
    return met.key + resource;
}
function buildPathItemObject(
                ctl: interfaces.ControllerMetadata,
                met: interfaces.ControllerMethodMetadata,
                pathItemObject: PathItemObject,
                typeDic: {[key: string]: any }): void {

// console.log("Method--------------------------");
// console.log(met);
// console.log("Method-end-------------------------");

    const resourceName = buildResourceName(ctl);
    const method =  met.key;
    const operationId = buildOperationId(met, resourceName);


    pathItemObject[method] = {
        operationId: operationId,
        summary: "Summary for " + operationId,
        description: "Description for " + operationId,
        tags: [],
        parameters: [],
        // requestBody: {
        //     description: "On post.",
        //     content: {
        //         "application/json": {
        //             schema: {
        //                 $ref: "#/components/schemas/_config"
        //             }
        //         }
        //     }
        // },
        responses: {
            default: {
                description: "Unexpected error.",
                content: {
                    "application/json": {
                        schema: {
                            type: "string"
                        }
                    }
                }
            },
            "200": {
                "description": "Sucessful response.",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/" + toPascal(resourceName)
                        }
                    }
                }
            }
        }
    };

    typeDic[resourceName] = {
        name: resourceName
        // todo: access Entity metadata to build the Schema
    };

    if (method === "post") {
        const ctor = ctl.target.constructor;
        // todo: needed access to parameter & entity metadata
    } else if (method === "get") {
        const get = ctl.target.get;  // ??
        // todo: needed access to parameter & entity metadata
    } else if (method === "put") {
        const get = ctl.target.put;  // ??
        // todo: needed access to parameter & entity metadata
    } else if (method === "delete") {
        const get = ctl.target.delete;  // ??
        // todo: needed access to parameter & entity metadata
    }
}

function toPascal(text: string): string {
    if (!text || text.length === 0) {
        return text;
    }
    return text[0].toUpperCase() + text.substr(1);
}
