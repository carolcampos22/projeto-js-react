import React from 'react';
import { FiltersContainer, FormFilters, LabelFilters, Titulo } from './filtersStyled';

export const Filters = (props) => {
    
    
    return (
        <FiltersContainer>
            
            <FormFilters>
                <Titulo>Faça sua busca!</Titulo>
                <LabelFilters htmlFor='minimo' type="number">Valor mínimo <br />
                    <input value={props.minFilter} onChange={props.handleMinFilter} id='minimo' placeholder='valor mínimo'/>
                </LabelFilters>
                
                <LabelFilters htmlFor='maximo' type="number">Valor máximo <br />
                    <input value={props.maxFilter} onChange={props.handleMaxFilter} id='maximo' placeholder='valor máximo'/>
                </LabelFilters>

                <LabelFilters htmlFor='busca-por-nome'>Busca por nome <br />
                    <input value={props.searchFilter} onChange={props.handleSearchFilter} type="text" id='busca-por-nome'placeholder='nome do produto' />
                </LabelFilters>

            </FormFilters>
            
        </FiltersContainer>
    )
    
    
}

//export default Filters;