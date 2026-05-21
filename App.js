//Importação para o meu laravel funcionar
import 'react-native-gesture-handler';

//importar o container da navegação
//ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

//importar o meu laravel (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

//importar as telas
import Jogador1 from './components/Jogador1';
import Jogador2 from './components/Jogador2';



//criar o Drawer 
const Drawer = createDrawerNavigator();

//componente principal do APP
export default function APP() {
  //o que esta dentro do return aparece na tela
  return (
    //container principal da navegação
    <NavigationContainer>
      {/*menu lateral*/}
      <Drawer.Navigator>
        {/*tela do jogador1*/}
        <Drawer.Screen
          // nome que aparece no menu
          name="1 jogador"
          component={Jogador1}
        />
        <Drawer.Screen
          name="2 jogador"
          component={Jogador2} 
          />
      </Drawer.Navigator>
    </NavigationContainer>



  );
}