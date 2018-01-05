import { METADATA_KEY } from "./constants";
import { decoratorIsForPropertiesOnly, decoratorCanOnlyBeAppliedOnce } from "./error";

function getArgumentsLength(args: IArguments) {
    const keys = Object.keys(args);
    return keys.map(k => args[k])
               .filter(v => v !== undefined).length;
}

// export function mustBe(propertyValidationSchema: PropertyValidationSchema) {
//     return function (
//         target: Object,
//         propertyKey: string
//     ) {
//         if (getArgumentsLength(arguments) > 2) {
//             throw new Error(decoratorIsForPropertiesOnly(propertyKey));
//         }
//         const constructor = target.constructor;
//         let metadataMap: (Map<string, PropertyValidationSchema> | undefined) = Reflect.getMetadata(
//             METADATA_KEY.OPENAPI,
//             constructor
//         );
//         if (metadataMap === undefined) {
//             metadataMap = new Map<string, PropertyValidationSchema>();
//         }
//         if (metadataMap.has(propertyKey)) {
//             throw new Error(decoratorCanOnlyBeAppliedOnce(propertyKey));
//         } else {
//             metadataMap.set(propertyKey, propertyValidationSchema);
//             Reflect.defineMetadata(
//                 METADATA_KEY.OPENAPI,
//                 metadataMap,
//                 constructor
//             );
//         }
//     };
// }
