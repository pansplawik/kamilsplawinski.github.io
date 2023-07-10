import { CardScreen } from "../components/card";

export const ProjectsDataScience = () => {
	const description = [
		[
			"Utilizing machine learning for Parkinson's disease detection in EEG signals",
			"Development of a machine learning model utilizing power spectral density (PSD) values of a signal and corresponding frequency components (Engineering Thesis).\nPython frameworks used: MNE, Sklearn, Numpy.",
		],
		[
			"Breast tumor detection using image segmentation.",
			"A machine learning model for breast tumor segmentation using the deep UNET network.\nPython frameworks used: Keras, TensorFlow, NumPy, Scikit-learn.",
		],
	];
	return (
		<>
			<div id="data">
				<div class="subTitle">Projects - Data Science</div>
				<CardScreen description={description} />
			</div>
		</>
	);
};
