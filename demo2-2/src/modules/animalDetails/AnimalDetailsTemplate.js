export class AnimalsDetailsTemplate {
  constructor() {}

  getAnimalDetailsMarkup({
    id,
    price,
    inCart,
    breed,
    image,
    gender,
    age,
    weight,
    color,
    is_sterile,
    hair,
    type,
    activity,
    water_type,
    temper
  }) {
    return `<div class="container is-fluid">
    <div class="container">
      <section class="columns animal-card animal-details-page-card">
        <div class="column is-half-tablet">
        <img class="animals-details-image" src="${image}" alt="${breed}" />
        </div>
        <div class="column is-half-tablet">
        <h1 class="animal-card-title">${breed}</h1>
        <span class="title is-2 animal-card-price"> | $${price}</span>
        <div class="animal-details-list">

          <div class="level">
            <div class="level-left">
              <span class="level-item">Gender</span>
            </div>
            <div class="level-right">
              <span class="level-item">${gender}</span>
            </div>
          </div>

          <div class="level">
          <div class="level-left">
            <span class="level-item">Weight</span>
          </div>
          <div class="level-right">
            <span class="level-item">${weight} kg</span>
          </div>
        </div>

        <div class="level">
          <div class="level-left">
            <span class="level-item">Age</span>
          </div>
          <div class="level-right">
            <span class="level-item">${age} mo.</span>
          </div>
        </div>

        <div class="level">
          <div class="level-left">
            <span class="level-item">Color</span>
          </div>
          <div class="level-right">
            <span class="level-item">${color}</span>
          </div>
        </div>

        ${
          is_sterile
            ? `
        
        <div class="level">
          <div class="level-left">
            <span class="level-item">Sterile</span>
          </div>
          <div class="level-right">
            <span class="level-item">${is_sterile ? "Yes" : "No"}</span>
          </div>
        </div>

        `
            : ""
        }

        ${
          hair
            ? `
        
        <div class="level">
          <div class="level-left">
            <span class="level-item">Hair type</span>
          </div>
          <div class="level-right">
            <span class="level-item">${hair}</span>
          </div>
        </div>

        `
            : ""
        }

        ${
          type
            ? `
        
        <div class="level">
          <div class="level-left">
            <span class="level-item">Type</span>
          </div>
          <div class="level-right">
            <span class="level-item">${type}</span>
          </div>
        </div>

        `
            : ""
        }

        ${
          activity
            ? `
        
        <div class="level">
          <div class="level-left">
            <span class="level-item">Activity time</span>
          </div>
          <div class="level-right">
            <span class="level-item">${activity}</span>
          </div>
        </div>

        `
            : ""
        }

        ${
          water_type
            ? `
        
        <div class="level">
          <div class="level-left">
            <span class="level-item">Water Type</span>
          </div>
          <div class="level-right">
            <span class="level-item">${water_type}</span>
          </div>
        </div>

        `
            : ""
        }

        ${
          temper
            ? `
        
        <div class="level">
          <div class="level-left">
            <span class="level-item">Temper</span>
          </div>
          <div class="level-right">
            <span class="level-item">${temper}</span>
          </div>
        </div>

        `
            : ""
        }
        
        </div>
        <div class="animals-details-buttons has-text-right">
        <button class="button is-medium animals-details-back-button is-rounded">Back To Catalog</button>
        <button class="button is-rounded ${
          inCart ? "is-warning" : "is-primary"
        } buy-button is-medium add-to-cart-button" data-animal_id="${id}">${inCart ? "In Cart" : "Buy"}</button>
        </div>
        </div>
      </section>
      </div>
    </div>`;
  }
}
