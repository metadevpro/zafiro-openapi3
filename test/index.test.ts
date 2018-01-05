import { expect } from "chai";
import { createOpenApiSpec } from "../src";
import {
    decoratorIsForPropertiesOnly,
    decoratorCanOnlyBeAppliedOnce,
    noMetadataWasFound
} from "../src/error";

describe("zafiro-openapi3", () => {
    it("test 1", () => {
        expect(1).eql(1);
    });
});
