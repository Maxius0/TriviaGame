import { BASE_URL_OPENTDB } from ".";

export async function apiFetchAllQuestions() {
  try {
    const response = fetch(`${BASE_URL_OPENTDB}?amount=10`);

    if (!response.ok) {
      throw new Error("Could not find questions");
    }

    const { success, data, error } = await response.json();

    if (!success) {
      throw new Error(error);
    }

    return [(null, data)];
  } catch (e) {
    return [e.message, []];
  }
}
