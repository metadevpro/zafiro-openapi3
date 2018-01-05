
export const decoratorIsForPropertiesOnly = (propertyKey: string) => {
    return "The @mustBe decorator can only be applied to properties " +
    `but it has been applied the method ${propertyKey}`;
};

export const decoratorCanOnlyBeAppliedOnce = (propertyKey: string) => {
    return "The @mustBe decorator can only be applied once " +
    `but it has been applied multipl times to ${propertyKey}`;
};

export const noMetadataWasFound = (className: string) => {
    return "No metadata was found! Did you forget an @mustBe " +
    `annotation in ${className}?`;
};
