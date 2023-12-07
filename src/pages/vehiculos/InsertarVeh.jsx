import { useState } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const InsertarVeh = () => {
    const [values, setValues] = useState({
        marca: "",
        modelo: "",
        anio: "",
        vin: "",
    });
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8081/insertarVehiculo',values)
        .then(res => navigate('/Vehiculos'))
        .catch(err => console.log(err));
        console.log("marca: "+values.marca)
        console.log("modelo: "+values.modelo)
    }
    function salir(){
        navigate('/Vehiculos')
    }
  return (
    <main className="main-container">
      <div className="text-center py-3">
        <h3 className="text-red text-center">Insertar Vehiculos</h3>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
          <Form onSubmit={handleSubmit}>
              <div className="card bg-light">
                <div className="card-header">
                  <Form.Group className="mb-3" controlId="Marca">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Indique la marca"
                      required
                      onChange={(e) => setValues({...values, marca:e.target.value})}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Modelo">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Indique el Modelo"
                      required
                      onChange={(e) => setValues({...values, modelo:e.target.value})}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="anio">
                    <Form.Label>Año</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Indique el Año"
                      required
                      onChange={(e) => setValues({...values, anio:e.target.value})}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="anio">
                    <Form.Label>VIN</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Indique el Vin"
                      required
                      onChange={(e) => setValues({...values, vin:e.target.value})}
                    />
                  </Form.Group>
                </div>

                <div className="card-footer text-center">
                    <Button className="mx-2" variant="success" type="submit" >
                        Submit
                    </Button>
                    <Button variant="info" type="button" onClick={()=>salir()}>
                        Cancelar
                    </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InsertarVeh;
