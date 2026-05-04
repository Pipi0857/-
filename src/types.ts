export interface Option {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  subOptions?: Option[];
  recommendations?: string[];
  activityHighlights?: Record<string, string>; // Maps Activity SubOption ID to a specific recommendation string
}

export interface ChoiceStep {
  title: string;
  subtitle: string;
  options: Option[];
}

export interface UserSelections {
  location: string[];
  transport: string[];
  category: string[];
  activity: string[];
}
