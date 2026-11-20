<template>
  <main class="content">
    <form
      action="#"
      method="post"
    >
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                v-for="item in dough"
                :key="item.id"
                :class="[
                  'dough__input',
                  `dough__input--${item.image.replace(/^dough-|\.svg$/g, '')}`,
                ]"
              >
                <input
                  type="radio"
                  name="dought"
                  :value="item.id"
                  class="visually-hidden"
                />
                <b>{{ item.name }}</b>
                <span>{{ item.description }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label
                v-for="item in sizes"
                :key="item.id"
                :class="[
                  'diameter__input',
                  `diameter__input--${item.image.replace(/^dough-|\.svg$/g, '')}`,
                ]"
              >
                <input
                  v-model="selectedSize"
                  type="radio"
                  name="diameter"
                  :value="item.id"
                  class="visually-hidden"
                />
                <span>{{ item.name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label
                  v-for="item in sauces"
                  :key="item.id"
                  class="radio ingredients__input"
                >
                  <input
                    v-model="selectedSauce"
                    type="radio"
                    name="sauce"
                    :value="item.id"
                    checked
                  />
                  <span>{{ item.name }}</span>
                </label>

                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      v-for="item in ingredients"
                      :key="item.id"
                      class="ingredients__item"
                    >
                      <span
                        :class="[
                          'filling',
                          `filling--${item.image.replace(/^filling\/|\.svg$/g, '')}`,
                        ]"
                        >{{ item.name }}</span
                      >

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button
                type="button"
                class="button"
                disabled
              >
                Готовьте!
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import ref from "vue";
import doughData from "./mocks/dough.json";
import ingredientsData from "./mocks/ingredients.json";
import miscData from "./mocks/misc.json";
import saucesData from "./mocks/sauces.json";
import sizesData from "./mocks/sizes.json";

const dough = doughData;
const ingredients = ingredientsData;
const misc = miscData;
const sauces = saucesData;
const sizes = sizesData;

const selectedSize = ref(sizes[1].id);
const selectedSauce = ref(sauces[0].id);
</script>
