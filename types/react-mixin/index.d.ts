// Type definitions for react-mixin 2.0.2
// Project: https://github.com/brigand/react-mixin
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference path="../react/v15/index.d.ts" />

declare module 'react-mixin' {
    export interface ClassDecorator {
        <TFunction extends Function>(target: TFunction): TFunction | void;
    }

    interface ReactMixin {
        decorate(mixin: React.Mixin<any, any>): ClassDecorator;
        onClass<S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
        <S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
    }

    var reactMixin: ReactMixin;

	export default reactMixin;
}