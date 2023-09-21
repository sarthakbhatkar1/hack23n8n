import type { INodeProperties } from 'n8n-workflow';

export const contactOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Title Page',
				value: 'Title Page',
				description: 'Create a Title Page',
				action: 'Create a Title Page',
			},
			{
				name: 'Keywords',
				value: 'Keywords',
				description: 'Create a keywords',
				action: 'Create a keywords',
			},
			{
				name: 'Document Content Type',
				value: 'Document Content Type',
				description: 'Create a document content type',
				action: 'Create a document content',
			},
			{
				name: 'Category',
				value: 'Category',
				description: 'Create a category',
				action: 'Create a category',
			},

			// {
			// 	name: 'Create',
			// 	value: 'create',
			// 	description: 'Create a contact',
			// 	action: 'Create a contact',
			// },
			// {
			// 	name: 'Custom Attributes',
			// 	value: 'getCustomAttributes',
			// 	description: 'Get custom attributes',
			// 	action: 'Get custom attributes for a contact',
			// },
			// {
			// 	name: 'Delete',
			// 	value: 'delete',
			// 	description: 'Delete a contact',
			// 	action: 'Delete a contact',
			// },
			// {
			// 	name: 'Get',
			// 	value: 'get',
			// 	description: 'Get a contact',
			// 	action: 'Get a contact',
			// },
			// {
			// 	name: 'Update',
			// 	value: 'update',
			// 	description: 'Update a contact',
			// 	action: 'Update a contact',
			// },
		],
		default: 'create',
	},
];

export const contactFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                contact:create                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		description: 'The email of the contact',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the contact',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'The phone number associated with the contact',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:update                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		description: 'Unique identifier for the contact',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'The email of the contact',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the contact',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'The phone number associated with the contact',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:get                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get'],
			},
		},
		description: 'Unique identifier for the contact',
	},
	/* -------------------------------------------------------------------------- */
	/*                                 contact:delete                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['delete'],
			},
		},
		description: 'Unique identifier for the contact',
	},
];
