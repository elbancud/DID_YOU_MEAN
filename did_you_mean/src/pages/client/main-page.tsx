import * as React from "react";

interface FormElements extends HTMLFormControlsCollection {
	phrase: HTMLInputElement;
}
interface PhraseInputElement extends HTMLFormElement {
	readonly elements: FormElements;
}

function extractInput(input: String) {
	console.log(input);
}
function handleSubmit(event: React.FormEvent<PhraseInputElement>) {
	event.preventDefault();
	extractInput(event.currentTarget.phrase.value);
}
function MainPage() {
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
							Enter a phrase?
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
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
		</div>
	);
}
export default MainPage;
