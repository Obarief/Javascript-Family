import mobil from "../assets/mobil.json"
import motor from "../assets/motor.json"
import EachUtils from "../utils/EachUtils"

const API = () => {
    return (
      <div className="text-center">
        <h1>Nyoba Each Utils</h1>
        <p className="mb-5">
          kegunaanya agar lebih terorganisir untuk consume API
        </p>

        <EachUtils of={mobil} render={(item, index) => <p>{index + 1}. {item.name}</p>} />
        <hr />
        <EachUtils of={motor} render={(item, index) => <p>{index + 1}. {item.name}</p>} />
      </div>
    );
}

export default API;