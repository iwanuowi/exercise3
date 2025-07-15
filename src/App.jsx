import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <div className="fw-bold border border-1 border-black p-4 rounded w-100">
        {!subscribed ? (
          <form>
            <p className="fs-3 border-bottom border-1 border-black">
              Newsletter Subscription
            </p>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 w-100 bg-white text-secondary-emphasis rounded border border-1 border-black fw-bold"
              />
            </div>
            <div className="d-flex pb-2 pt-2">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-100 bg-white text-secondary-emphasis rounded border border-1 border-black fw-bold"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="bg-primary text-white fw-bold d-flex px-3 py-2 rounded border-0"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div
            className="alert alert-success d-flex align-items-center mt-3"
            role="alert"
          >
            <svg
              className="bi flex-shrink-0 me-2"
              role="img"
              aria-label="Success:"
              width="24"
              height="24"
            >
              <use xlinkHref="#check-circle-fill" />
            </svg>
            <span>Please check your email ({email}) for confirmation.</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
