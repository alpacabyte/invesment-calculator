function UserInputContainer({ data, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={data.initialInvestment}
            onChange={onChange}
            name="initialInvestment"
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={data.annualInvestment}
            onChange={onChange}
            name="annualInvestment"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={data.expectedReturn}
            onChange={onChange}
            name="expectedReturn"
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={data.duration}
            onChange={onChange}
            name="duration"
          />
        </p>
      </div>
    </section>
  );
}

export default UserInputContainer;
