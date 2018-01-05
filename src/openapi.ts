import * as e from "express";
import { Container } from "inversify";
import { getRawMetadata, interfaces } from "inversify-express-utils";
import { contractBuilder } from "./contractBuilder";
import { Metadata } from "./interfaces";

let metadata: Metadata[];

export async function createOpenApiSpec(container: Container, app: e.Application, path: string) {
    metadata = getRawMetadata(container);
    // console.log(metadata);
    registerOpenApiEndpoint(app, path);
}

function registerOpenApiEndpoint(app: e.Application, path: string): void {
    app.get(path, (req, res) => getContract(req, res));
}

function getContract(req: e.Request, res: e.Response): void {
    const userRole = ""; // todo: extract user role from user request
    const contract = contractBuilder(userRole, metadata);
    res.json(contract).end();
}
