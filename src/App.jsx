
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cart() {
  return (
    <>
    <div className='bg-success panier'>
      <h6 className='text-end p-2'>Panier</h6>
      <div>
        <h4>Panier</h4>
        <ul>
          <li>lorem 23$</li>
          <li>lorem 23$</li>
        </ul>
        <span className='fw-semibold'>Total:</span>233$ <br />
        <button>Vider le panier</button>
      </div>
    </div>
    </>
  )
}
function Category(){
  return(
    <div className=' mx-auto'>
    <select name="" id="">
      <option value="">Select</option>
    </select>
    <button className='mx-2'>Boutton </button>
    </div>
  )
}
function Carsale() {
  return (
    <>
      <span className='fw-semibold'>Lorem 1</span> <br />
      <span>
        {/* <i className="bi bi-droplet-fill text-primary"></i> */}
        <CareScale icon='💧 '/>
      </span> <br />
      <span >
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
      </span> <br />
      <button className='mt-2'>Ajouter</button>
    </>
  )
}

function CareScale(props){

  return(
    <>
    {props.icon}
    </>
  ) 
}
function PlantItems() {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 ">
        <div className="card p-1 position-relative" >
          <span className="position-absolute top-0   end-0  badge rounded-pill text-bg-primary">25$ <span className="visually-hidden">unread messages</span></span>
          <img src='https://img.freepik.com/photos-premium/fleur-rose-centre-jaune-centre-jaume_1244071-42859.jpg?size=626&ext=jpg&ga=GA1.1.1842367286.1724846270&semt=ais_hybrid' className="card-img-top fleur rounded" alt="fleur logo" />
          <div className="card-body">
            <p className="card-text text-dark">
            <Carsale/>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}


function ShoppingList() {
  return (
    <>
      <div id='content' className='container d-flex align-items-center'>
        <div className="row d-flex justify-content-around">
          <PlantItems />
          <div className="col-12 col-md-6 col-lg-3 ">
            <div className="card p-1 position-relative" >
              <span className="position-absolute top-0   end-0  badge rounded-pill text-bg-primary">25$ <span className="visually-hidden">unread messages</span></span>

              <img src="https://img.freepik.com/photos-gratuite/vue-dessus-fleurs-roses_23-2148860041.jpg?size=626&ext=jpg&ga=GA1.1.1842367286.1724846270&semt=ais_hybrid" className="card-img-top fleur rounded" alt="fleur logo" />
              <div className="card-body">
                <p className="card-text text-dark">
                  <span className='fw-semibold'>Lorem 2</span> <br />
                  <span>
                    <i className="bi bi-droplet-fill text-primary"></i>
                    <i className="bi bi-droplet-fill text-primary"></i>
                    <i className="bi bi-droplet-fill text-primary"></i>
                  </span> <br />
                  <span className=''>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </span> <br />
                  <button className='mt-2'>Ajouter</button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ">
            <div className="card p-1 position-relative" >
              <span className="position-absolute top-0   end-0  badge rounded-pill text-bg-primary">25$ <span className="visually-hidden">unread messages</span></span>

              <img src='https://img.freepik.com/photos-gratuite/beau-papier-peint-floral_23-2150705752.jpg?size=626&ext=jpg&ga=GA1.1.1842367286.1724846270&semt=ais_hybrid' className="card-img-top fleur rounded" alt="fleur logo" />
              <div className="card-body">
                <p className="card-text text-dark">
                  <span className='fw-semibold'>Lorem 3</span> <br />
                  <span>
                    <i className="bi bi-droplet-fill text-primary"></i>
                    <i className="bi bi-droplet-fill text-primary"></i>
                  </span> <br />
                  <span className=''>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </span> <br />
                  <button className='mt-2'>Ajouter</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {


  return (
    <>
    <div className='category' >
      <Category/>
    </div>
      <div className='d-flex justify-content-between flex-column flex-md-row flex-lg-row align-items-center align-items-md-center align-items-lg-stretch'>
        <Cart />
        <ShoppingList />
      </div>
    </>

  )
}

export default App
