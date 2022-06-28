import * as React from "react";
import Dictionary from "../../data/dictionary.json";
// Extends a collection of HTML form control elements.
interface FormElements extends HTMLFormControlsCollection {
	phrase: HTMLInputElement;
}
interface PhraseInputElement extends HTMLFormElement {
	elements: FormElements;
}

// Return true if the current word is in the dictionary
function isInTheDictionary(currentWord: string) {
	const currentWordCase = currentWord.toLowerCase();
	// loop through the dictionary.
	for (let i of Dictionary) {
		if (i.word.toLowerCase() === currentWordCase) {
			return true;
		}
	}
	return false;
}
// Return the word which contains 95% or 50% of the current word
// If there's no slightly similar then just return the current word
function findNearestSuggestion(currentWord: string) {
	// Loop through the dictionary.
	for (let j of Dictionary) {
		// Variables
		let currentWordSplit: string[] = currentWord.split("");
		let currentWordDictionarySplit: string[] = j.word.split("");
		let currentDictionaryWordLength: number = j.word.length;
		let letterMatchCount: number = 0;
		// Loop in in the splitted words of current word and current word in the dictionary
		// MUST: be delegated as it is repeating.
		for (let k in currentWordDictionarySplit) {
			if (currentWordSplit[k] === currentWordDictionarySplit[k]) {
				letterMatchCount++;
			}
		}
		if (
			letterMatchCount >= Math.floor(0.95 * currentDictionaryWordLength) ||
			letterMatchCount >= Math.floor(0.5 * currentDictionaryWordLength)
		) {
			return j.word;
		}
	}
	return currentWord;
}

function extracted(input: string): string {
	const inputSplitWhiteSpace: string[] = input.split(" ");
	let paraphrased: string = "";
	for (let currentWord of inputSplitWhiteSpace) {
		// If a word is not in the dictionary store find the closest word.
		const validateWord: string | boolean = isInTheDictionary(currentWord)
			? currentWord
			: findNearestSuggestion(currentWord);
		paraphrased += validateWord + " ";
	}
	console.log("Did you mean: " + paraphrased);
	return paraphrased;
}

function MainPage() {
	const [paraphrasedWord, setParaphrasedWord] = React.useState<string>();

	function handleSubmit(event: React.FormEvent<PhraseInputElement>) {
		event.preventDefault();
		setParaphrasedWord(extracted(event.currentTarget.phrase.value));
	}
	return (
		<div>
			<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						{/* <img
							className="mx-auto h-12 w-auto"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
							alt="Workflow"
						/> */}
						<h2 className="mt-6 text-center text-xl font-extrabold ">
							phrase?
						</h2>
					</div>
					<form
						className="mt-8 space-y-6"
						action="#"
						method="GET"
						onSubmit={handleSubmit}
					>
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="email-address" className="sr-only">
									Phrase
								</label>
								<input
									id="phrase"
									name="phrase"
									type="text"
									autoComplete="phrase"
									required
									className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Input"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								input
							</button>
						</div>
					</form>
				</div>
			</div>
			Did yo ass mean
			<h5 className="italic font-bold">{paraphrasedWord}</h5>
		</div>
	);
}
export default MainPage;
