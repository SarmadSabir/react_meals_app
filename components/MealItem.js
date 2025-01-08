import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectedMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }
    
    return (
        <View style={styles.mealItem}>
            <Pressable 
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectedMealItemHandler}
            >
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 12,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
});
