interface AutoFormHooks<Doc, Result> {
    before?: {[type: string]: (this: AutoformHookEnv, doc: Doc) => (Object | boolean | void)}
    after?: {[type: string]: (this: AutoformHookEnv, ) => void}
    onSubmit?(this: AutoformHookEnv & {done(): void}, insertDoc: Doc, updateDoc: Mongo.Modifier, currentDoc: Doc): Result
    onSuccess?(this: AutoformHookEnv, formType: string, result: Result): void
    onError?(this: AutoformHookEnv, formType: string, error: Error): void
    formToDoc?(this: AutoformHookEnv, doc: Doc): Object
    formToModifier?(this: AutoformHookEnv, modifier: Mongo.Modifier): Object
    docToForm?(this: AutoformHookEnv, doc: Doc, schema: SimpleSchema): Object
    beginSubmit?(this: AutoformHookEnv): void
    endSubmit?(this: AutoformHookEnv): void
}

interface AutoformHookEnv {
    addStickyValidationError(key: string, type: any, value?: any): void
    autoSaveChangedElement: Element
    collection: Mongo.Collection<{}>
    currentDoc: any //XXX
    docID?: string
    event: Event
    formAttributes: {}
    formId: string
    insertDoc: {}
    removeStickyValidationError(key: string): void
    resetForm(): void
    ss: SimpleSchema
    ssIsOverride: boolean
    template: void // XXX
    updateDoc: {}
    validationContext: {}
}

declare module AutoForm {
    export function addHooks<D, R>(forms: (string | string[]), hooks: AutoFormHooks<D, R>): void;
}