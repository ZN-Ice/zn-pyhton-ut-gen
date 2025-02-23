// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('插件已激活');

	// 注册第一个命令
	const helloWorld = vscode.commands.registerCommand('zn-pyhton-ut-gen.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	// 注册第二个命令
	const testCommand = vscode.commands.registerCommand('zn-pyhton-ut-gen.testCommand', () => {
		// 获取当前编辑器
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			// 获取选中的文本
			const selection = editor.selection;
			const text = editor.document.getText(selection);
			vscode.window.showInformationMessage(`选中的文本是: ${text}`);
		}
	});

	context.subscriptions.push(helloWorld, testCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
