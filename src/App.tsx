import './App.css'

function App() {

  return (
    <div className="pt-8">
      <header className={"w-full pb-6 border-b-2"}>
          <div className={"relative flex flex-row justify-between items-center px-4 sm:px-16 lg:px-32"}>
              <div className={"w-1/3"}>
                  <h1 className={"cursor-pointer font-bold text-xl lg:text-3xl"}>Tristan Dereigne.</h1>
              </div>
              <nav className={"z-10 w-1/3 flex flex-row justify-between items-center gap-2 sm:gap-8 lg:gap-16 lg:text-lg"}>
                  <h2 className={"cursor-pointer"}>Expertises</h2>
                  <h2 className={"cursor-pointer"}>Réalisations</h2>
                  <h2 className={"cursor-pointer"}>Mindset</h2>
              </nav>
              <div className={"w-1/3 flex justify-end items-center"}>
                  <button className={"border-2 cursor-pointer py-3 px-12 text-center"}>
                      <p className={"font-bold lg:text-lg"}>Contact</p>
                  </button>
              </div>
          </div>
      </header>
      <main>

      </main>
    </div>
  )
}

export default App
