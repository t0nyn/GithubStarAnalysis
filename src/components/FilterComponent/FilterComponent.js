// components/FilterComponent.js
import React from 'react';
import './FilterComponent.css'

function FilterComponent({ grouping, setGrouping, period, setPeriod, type, setType }) {
  return (
    <div className="filter-component">
      <label>Agrupamento:</label>
      <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
        <option value="day">Dia</option>
        <option value="week">Semana</option>
        <option value="month">Mês</option>
        <option value="year">Ano</option>
      </select>

      <label>Tipo:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="absolute">Absoluto</option>
        <option value="cumulative">Cumulativo</option>
      </select>

      <label>Período:</label>
      <select value={period} onChange={(e) => setPeriod(e.target.value)}>
        <option value="all">Todo</option>
        <option value="last30days">Últimos 30 dias</option>
        <option value="last6months">Últimos 6 meses</option>
        <option value="lastYear">Último ano</option>
      </select>
    </div>
  );
}

export default FilterComponent;
