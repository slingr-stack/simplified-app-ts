export interface ChoiceUi<K extends string> {
    labels: {
        [Key in K]: string;
    }
}
