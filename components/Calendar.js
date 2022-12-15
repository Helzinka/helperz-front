import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          todayBackgroundColor="#8EE8D6"
          selectedDayColor="#00C6A0"
          selectedDayTextColor="#FFFFFF"
          weekdays={["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]}
          months={[
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Aout",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
          ]}
          previousTitle="Précédent"
          nextTitle="Suivant"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
});
