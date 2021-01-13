import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '../index'

interface Message {
	body: string;
	type: string;
	icon: string;
}

@Module({name: 'system', dynamic: true, store: store})
export default class System extends VuexModule {
	message: Message = { body: '', type: '', icon: '' }
	systemName = "Admin-Template"

	@Mutation
	setMessage (messsage: Message) {
		this.message = messsage;
	}
}
