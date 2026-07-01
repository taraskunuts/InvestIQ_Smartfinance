import React from 'react';

import "./Tooltip.css"
const Tooltip = () => {


    return (
     <div class="tooltip-box">
  <div class="tooltip-arrow"></div>
  <p class="tooltip-title">Привіт! Для початку роботи внесіть свій поточний баланс рахунку!</p>
  <p class="tooltip-text">Ви не можете витрачати гроші, поки їх у Вас немає :</p>
</div>

    );
};

export default Tooltip;
