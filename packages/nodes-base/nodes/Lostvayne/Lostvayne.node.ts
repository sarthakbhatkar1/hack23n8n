import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { HttpRequestV3 } from './HttpRequestV3.node';

export class Lostvayne extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Lostvayne',
			name: 'Lostvayne Node 1',
			icon: 'file:Lostvayne.svg',
			group: ['output'],
			subtitle: '={{$parameter["requestMethod"] + ": " + $parameter["url"]}}',
			description: 'Makes an HTTP request and returns the response data',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new HttpRequestV3(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
