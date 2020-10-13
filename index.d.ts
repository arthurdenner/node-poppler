// Type definitions for Node-Poppler 1.8.4
// Project: https://github.com/Fdawgs/node-poppler
// Definitions by: Frazer Smith <https://github.com/Fdawgs>

export class Poppler {
	constructor(binPath: string);

	pdfAttach(...args: any[]): void;

	pdfDetach(...args: any[]): void;

	pdfFonts(...args: any[]): void;

	pdfImages(...args: any[]): void;

	pdfInfo(...args: any[]): void;

	pdfSeparate(...args: any[]): void;

	pdfToCairo(...args: any[]): void;

	pdfToHtml(...args: any[]): void;

	pdfToPpm(...args: any[]): void;

	pdfToPs(...args: any[]): void;

	pdfToText(...args: any[]): void;

	pdfUnite(...args: any[]): void;
}
