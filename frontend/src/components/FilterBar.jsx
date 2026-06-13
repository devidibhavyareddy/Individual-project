const FilterBar = ({
  filterType,
  setFilterType,
  filterStatus,
  setFilterStatus,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">

      <select
        value={filterType}
        onChange={(e) =>
          setFilterType(
            e.target.value
          )
        }
        className="border p-3 rounded"
      >
        <option value="">
          All Types
        </option>

        <option value="Dog">
          Dog
        </option>

        <option value="Cat">
          Cat
        </option>

        <option value="Bird">
          Bird
        </option>

        <option value="Other">
          Other
        </option>

      </select>

      <select
        value={filterStatus}
        onChange={(e) =>
          setFilterStatus(
            e.target.value
          )
        }
        className="border p-3 rounded"
      >
        <option value="">
          All Status
        </option>

        <option value="Rescued">
          Rescued
        </option>

        <option value="Under Care">
          Under Care
        </option>

        <option value="Ready For Adoption">
          Ready For Adoption
        </option>

        <option value="Available">
          Available
        </option>

        <option value="Adopted">
          Adopted
        </option>

      </select>

    </div>
  );
};

export default FilterBar;
