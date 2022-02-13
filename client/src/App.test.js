import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import store from './Redux/Store/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import FormCreate from './components/Recetas/FormCreate';

describe('Formulario de creación', () => {
  it('debe de rendiderizar el input de la imagen de la receta', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormCreate />
        </BrowserRouter>
      </Provider>
    );
    const image = screen.getByPlaceholderText('URL de la imagen del platillo')
    expect(image).toBeInTheDocument();
  })

  it('debe de renderizar el input del nombre de la receta', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormCreate />
        </BrowserRouter>
      </Provider>
    );
    const nombre = screen.getByPlaceholderText('Mi receta favorita')
    expect(nombre).toBeInTheDocument()
  })

  it('debe de renderizar el input de puntucación', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormCreate />
        </BrowserRouter>
      </Provider>
    );
    const score = screen.getByPlaceholderText('¿Qué puntuación le das a tu receta?')
    expect(score).toBeInTheDocument()
  })

  it('debe de renderizar el input de resumen', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormCreate />
        </BrowserRouter>
      </Provider>
    );
    const summary = screen.getByPlaceholderText('Describe lo asombrosa que es tu receta')
    expect(summary).toBeInTheDocument()
  })

  it('debe de renderizar el input de pasos', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormCreate />
        </BrowserRouter>
      </Provider>
    );
    const pasos = screen.getByPlaceholderText('Cuéntanos cómo se prepara, todos queremos saber')
    expect(pasos).toBeInTheDocument()
  })

  
});

