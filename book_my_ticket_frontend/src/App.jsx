import "./App.css";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path={"/"}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
