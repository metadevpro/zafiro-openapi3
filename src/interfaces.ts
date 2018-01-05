import { interfaces } from "inversify-express-utils";

export type Metadata = {
    controllerMetadata: interfaces.ControllerMetadata,
    methodMetadata: interfaces.ControllerMethodMetadata[],
    parameterMetadata: interfaces.ControllerParameterMetadata,
};
