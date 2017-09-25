declare class SimpleSchema {
    constructor(schema: SimpleSchemaDefinition);
    static RegEx: SimpleSchemaRegexes;
}

declare type SimpleSchemaDefinition = {
    [fieldName: string]: SimpleSchemaField;
}

declare type SimpleSchemaType = ObjectConstructor | SimpleSchema;

declare type MinMaxValue = Number | Date;

interface AutoformSpec {
    type: string;
}

interface SSAutoValueContext {
    isSet: boolean
    unset(): void
    value: any
    operator: string
    field(name: string): {isset: boolean, value: any, operator: string}
    siblingField(name: string): {isset: boolean, value: any, operator: string}
}

interface SimpleSchemaField {
    type?: SimpleSchemaType | [SimpleSchemaType];
    label?: string | (() => string);
    optional?: boolean;
    min?: MinMaxValue | (() => MinMaxValue) | void;
    max?: MinMaxValue | (() => MinMaxValue) | void;
    exclusiveMin?: boolean;
    exclusiveMax?: boolean;
    decimal?: boolean;
    minCount?: number;
    maxCount?: number;
    allowedValues?: any[];
    regEx?: RegExp;
    blackbox?: boolean;
    trim?: boolean;
    custom?: () => string;
    defaultValue?: any;
    autoValue?: (this: SSAutoValueContext) => any;
    autoform?: AutoformSpec;
}

interface SimpleSchemaRegexes {
    Email: RegExp;
    Domain: RegExp;
    WeakDomain: RegExp;
    IP: RegExp;
    IPv4: RegExp;
    IPv6: RegExp;
    Url: RegExp;
    Id: RegExp;
    ZipCode: RegExp;
}
