interface ReactSelectOption  {
  value: string;
  label: string;
}

interface ReactSelectProps {
  addLabelText?: string, // placeholder displayed when you want to add a label on a multi-value input
  allowCreate?: boolean, // whether to allow creation of new entries
  asyncOptions?: (input: string, callback: (error: any, result: {options: ReactSelectOption[], complete: boolean}) => void) => void, // function to call to get options
  autoload?: boolean, // whether to auto-load the default async options set
  backspaceRemoves?: boolean, // whether backspace removes an item if there is no text input
  cacheAsyncResults?: boolean, // whether to allow cache
  className?: string, // className for the outer element
  clearAllText?: string, // title for the "clear" control when multi?: true
  clearValueText?: string, // title for the "clear" control
  clearable?: boolean, // should it be possible to reset value
  delimiter?: string, // delimiter to use to join multiple values
  disabled?: boolean, // whether the Select is disabled or not
  filterOption?: (option: ReactSelectOption, filter: string) => boolean, // method to filter a single option
  filterOptions?: (option: ReactSelectOption[], filter: string, selectedValues: string[]) => ReactSelectOption[], // method to filter the options array
  ignoreCase?: boolean, // whether to perform case-insensitive filtering
  inputProps?: React.DOMAttributes, // custom attributes for the Input (in the Select-control) e.g?: {'data-foo'?: 'bar'}
  matchPos?: string, // (any|start) match the start or entire string when filtering
  matchProp?: string, // (any|label|value) which option property to filter on
  multi?: boolean, // multi-value input
  name?: string, // field name, for hidden <input /> tag
  newOptionCreator?: void, // factory to create new options when allowCreate set
  noResultsText?: string, // placeholder displayed when there are no matching search results
  onBlur?: (event: React.SyntheticEvent) => void, // onBlur handler?: function(event) {}
  onChange?: (value: string, selectedValues: ReactSelectOption[]) => void, // onChange handler?: function(newValue) {}
  onFocus?: (event: React.SyntheticEvent) => void, // onFocus handler?: function(event) {}
  onOptionLabelClick?: (value: string, event: React.SyntheticEvent) => void, // onCLick handler for value labels?: function (value, event) {}
  // optionComponent?: React.ComponentClass<, // option component to render in dropdown
  // optionRenderer?: func, // optionRenderer?: function(option) {}
  options?: ReactSelectOption[], // array of options
  placeholder?: string, // field placeholder, displayed when there's no value
  searchable?: boolean, // whether to enable searching feature or not
  searchingText?: string, // message to display whilst options are loading via asyncOptions
  searchPromptText?: string, // label to prompt for search input
  // singleValueComponent?: func, // single value component when multiple is set to false
  value?: any, // initial field value
  // valueComponent?: func, // value component to render in multiple mode
  // valueRenderer?: func // valueRenderer?: function(option) {}
}
declare class ReactSelect extends React.Component<ReactSelectProps, {}> {
  render(): JSX.Element;
}
