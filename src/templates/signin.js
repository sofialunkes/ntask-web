exports.render = () => {
  return `<form>
            <div class="list">
            	<label class="item item-input item-stacked-label">
            		<span class="input-label">Email</span>
            		<input type="email" data-email>
            	</label>
            	<label class="item item-input item-stacked-label">
            		<span class="input-label">Senha</span>
            		<input type="password" data-password>
            	</label>
            </div>
            <div class="padding">
            	<button>
            		<i class="ion-home"></i>Entrar
            	</button>
            </div>
        </form>
        <div class="padding">
        	<button class="button button-block" data-signup> 
        		<i class="ion-person-add"></i> Cadastrar
        	</button>
        </div>
    `;
};
