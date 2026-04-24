import {
  getPlantProblemOptions,
  getPlantQuickStats,
  getPlantResults,
  getPlantSteps,
} from './plants.service';

export function usePlants(selectedProblemId?: string) {
  return {
    stats: getPlantQuickStats(),
    problemOptions: getPlantProblemOptions(),
    steps: getPlantSteps(),
    results: getPlantResults(selectedProblemId),
  };
}