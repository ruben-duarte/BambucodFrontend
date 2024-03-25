export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
};

// local problem data
export type Problem = {
	id: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
};