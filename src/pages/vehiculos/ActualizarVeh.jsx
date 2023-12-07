import { useEffect, useState } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
const API='http://localhost:8081/Vehiculos?id=';
const ActualizarVeh = () => {
    const {id} = useParams()
    const [values, setValues] = useState({
        marca: "",
        modelo: "",
        anio: "",
        vin: "",
    });
    const getDatos = async () => {
      try {
        const response = await fetch(API+id);
        const data = await response.json();
        console.log(data)
        setValues({
            ...values,
            marca:data[0].marca,
            modelo:data[0].modelo,
            anio:data[0].anio,
            vin:data[0].vin
        });

      } catch (error) {
        console.error(error)
      }
    };
   
    useEffect(()=>{
      getDatos();
    },[]);

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        axios.put(`http://localhost:8081/ActualizarVehiculo/${id}`,values)
        .then(res => navigate('/Vehiculos'))
        .catch(err => console.log(err));
    }
    function salir(){
        navigate('/Vehiculos')
    }

   


  return (

    <main className="main-container">
    <div className="text-center py-3">
      <h3 className="text-red text-center">Actualizar Vehiculo</h3>
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
                    value={values.marca}
                    onChange={(e) => setValues({...values, marca:e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Modelo">
                  <Form.Label>Modelo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Indique el Modelo"
                    required
                    value={values.modelo}
                    onChange={(e) => setValues({...values, modelo:e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="anio">
                  <Form.Label>Año</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Indique el Año"
                    required
                    value={values.anio}
                    onChange={(e) => setValues({...values, anio:e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="anio">
                  <Form.Label>VIN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Indique el Vin"
                    required
                    value={values.vin}
                    onChange={(e) => setValues({...values, vin:e.target.value})}
                  />
                </Form.Group>
              </div>

              <div className="card-footer text-center">
                  <Button className="mx-2" variant="success" type="submit" >
                      Actualizar
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
  )
}

export default ActualizarVeh