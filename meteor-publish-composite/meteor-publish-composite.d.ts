/// <reference path='../meteor/meteor' />
declare namespace Meteor {
	interface PublishCompositeOptions<L1, L2, L3, L4, L5> {
		find: () => Mongo.Cursor<L1>,
		children?: PublishCompositeOptions1<L1, L2, L3, L4, L5>[]
	}
	interface PublishCompositeOptions1<L1, L2, L3, L4, L5> {
		find: (l1: L1) => Mongo.Cursor<L2>,
		children?: PublishCompositeOptions2<L1, L2, L3, L4, L5>[]
	}
	interface PublishCompositeOptions2<L1, L2, L3, L4, L5> {
		find: (l2: L2, l1: L1) => Mongo.Cursor<L3>,
		children?: PublishCompositeOptions3<L1, L2, L3, L4, L5>[]
	}
	interface PublishCompositeOptions3<L1, L2, L3, L4, L5> {
		find: (l3: L3, l2: L2, l1: L1) => Mongo.Cursor<L4>,
		children?: PublishCompositeOptions4<L1, L2, L3, L4, L5>[]
	}
	interface PublishCompositeOptions4<L1, L2, L3, L4, L5> {
		find: (l4: L4, l3: L3, l2: L2, l1: L1) => Mongo.Cursor<L5>,
		children?: PublishCompositeOptions5<L1, L2, L3, L4, L5>[]
	}
	interface PublishCompositeOptions5<L1, L2, L3, L4, L5> {
		find: (l5: L5, l4: L4, l3: L3, l2: L2, l1: L1) => Mongo.Cursor<any>,
		children?: any[]
	}
	function publishComposite<L1, L2, L3, L4, L5>(
		name: string,
		options: PublishCompositeOptions<L1, L2, L3, L4, L5> | ((...args: any[]) => PublishCompositeOptions<L1, L2, L3, L4, L5>)
	): void;
}
