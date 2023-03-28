export function Input() {
  return (
    <>
      <label className="input">
        <input
          type="text"
          className="registerform-input"
          required
          name="email"
        />
        Email
      </label>
    </>
  );
}
