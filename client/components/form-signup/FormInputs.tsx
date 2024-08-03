export const TextField = ({ handleChange, form, fields, type }) => (
  <div className="form-text" key={type}>
    <input
      onChange={handleChange}
      value={form[fields[type].name] || ''}
      type={fields[type].type}
      name={fields[type].name}
      id={fields[type].name}
      placeholder={type}
    />
  </div>
);

export const TextAreaField = ({ handleChange, form, fields, type }) => (
  <div className="form-text" key={type}>
    <textarea
      name={fields[type].name}
      id={fields[type].name}
      placeholder={type}
      rows={Number(fields[type].options[0])}
      value={form[fields[type].name] || ''}
      onChange={handleChange}
    />
  </div>
);

export const CheckboxField = ({ handleChange, fields, type }) => (
  <div className="form-options" key={type}>
    <div className="form-options__items">
      {fields[type].options.map((option) => (
        <div className="button--option" key={option}>
          <input
            onChange={handleChange}
            type={fields[type].type}
            name={option}
            id={option}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  </div>
);

export const SelectField = ({ handleChange, form, fields, type }) => (
  <div className="form-text" key={type}>
    <select
      id={fields[type].name}
      name={fields[type].name}
      value={form[fields[type].name] || 'placeholder'}
      onChange={handleChange}
    >
      <option value="placeholder">Select an option</option>
      {fields[type].options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);