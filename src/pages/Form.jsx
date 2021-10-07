import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import TimePicker from 'react-time-picker';
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from "date-fns/locale/es";
registerLocale("es", es);

/**
 * Formulario para agregar un banner al home
 * @returns form
 */

const Form = () => {

    const {register, formState: { errors }, handleSubmit, reset} = useForm();
    
    //Declaración de variables de estado
    const [startDate, setStartDate] = useState(new Date());

    const [data, setData] = useState([]);

    const [value, onChange] = useState(new Date())

    const dateCurrent = new Date()
    const timeCurrent = dateCurrent.getHours() + ':' + dateCurrent.getMinutes()
    const [time, setTime] = useState(timeCurrent);

    //Función que se encargara de validar los datos y enviar el formulario
    const onSubmit = (info, e) => {
        const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
        const dateFormat = startDate.toLocaleDateString('es-ES', options)
        setData([
            ...data,
            {...info, dateEvent:dateFormat, timeEvent: time, imgDesktop: info.imgDesktop[0].name, imgTablet: info.imgTablet[0].name, imgMobile: info.imgMobile[0].name }
        ])
        console.log('Enviando datos...')
    }
    
    return (
        <div className='event-form'>
            <div className="container">
                <h1>Agregar Banner</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Nombre del Evento</label>
                        <input type="text" placeholder="Nombre del Evento" {...register('nameEvent', { required: true })} />
                        <span className='error'>{errors.nameEvent?.type === 'required' && "Nombre de Evento es requerido"}</span>
                    </div>
                    <div className="form-group">
                        <label>Fecha del Evento</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            minDate={new Date()}
                            locale='es'
                            dateFormat='dd-MM-yyyy'
                            placeholderText="Fecha del Evento"
                        />
                    </div>
                    <div className="form-group">
                        <label>Hora del Evento</label>
                        <TimePicker
                            clearIcon= ''
                            onChange={e => setTime(e)}
                            value={value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Url de compra</label>
                        <input type="text" placeholder="Ej. http://www.demo.com" {...register("url", {required: 'Url de compra es requerida', pattern:{ value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi, message: "Url invalida"} })} />
                        <span className="error">{errors.url && <p>{errors.url.message}</p>}</span>
                    </div>
                    <div className="form-group">
                        <label>Imagen Desktop <small>(Dimensión: 2340 x 700)</small></label>
                        <input type="file" {...register('imgDesktop', { required: true })}/>
                        <span className='error'>{errors.imgDesktop?.type === 'required' && "La imagen Desktop es requerida"}</span>
                    </div>
                    <div className="form-group">
                        <label>Imagen Tablet <small>(Dimensión: 1440 x 1080)</small></label>
                        <input type="file" {...register('imgTablet', { required: true })}/>
                        <span className='error'>{errors.imgTablet?.type === 'required' && "La imagen Tablet es requerida"}</span>
                    </div>
                    <div className="form-group"> 
                        <label>Imagen Mobile <small>(Dimensión: 1920 x 1080)</small></label>
                        <input type="file" {...register('imgMobile', { required: true })}/>
                        <span className='error'>{errors.imgMobile?.type === 'required' && "La imagen Mobile es requerida"}</span>
                    </div>
                    <button type="submit" className='btn'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Form
