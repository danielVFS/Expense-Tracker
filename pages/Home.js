import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";

import { VictoryPie } from "victory-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

import categoriesData from "../data/categories";

const Home = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [viewMode, setViewMode] = useState("chart");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  const categoryListHeightAnimationValue = useRef(new Animated.Value(115))
    .current;

  function renderNavBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 70,
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center", width: 50 }}
          onPress={() => alert("BACK")}
        >
          <Image
            source={icons.back_arrow}
            style={{ width: 30, height: 30, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: 50,
          }}
          onPress={() => alert("info")}
        >
          <Image
            source={icons.more}
            style={{ width: 30, height: 30, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <View>
          <Text
            style={{ color: COLORS.primary, ...FONTS.h2, fontWeight: "bold" }}
          >
            My Expenses
          </Text>
          <Text style={{ color: COLORS.darkgray, ...FONTS.h3 }}>
            Summary (private)
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.lightGray,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.calendar}
              style={{ width: 20, height: 20, tintColor: COLORS.lightBlue }}
            />
          </View>
          <View style={{ marginLeft: SIZES.padding }}>
            <Text
              style={{ color: COLORS.primary, ...FONTS.h3, fontWeight: "500" }}
            >
              11 Nov, 2020
            </Text>
            <Text
              style={{
                color: COLORS.darkgray,
                ...FONTS.body3,
              }}
            >
              18% than last month
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderCategoryHeaderSection() {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.padding,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Categogies</Text>
          <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>
            {categories.length} Total
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: viewMode === "chart" ? COLORS.secondary : null,
              height: 50,
              width: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setViewMode("chart")}
          >
            <Image
              source={icons.chart}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor:
                  viewMode === "chart" ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: viewMode === "list" ? COLORS.secondary : null,
              height: 50,
              width: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setViewMode("list")}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode === "list" ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderCategoryList() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 5,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderRadius: 5,
            backgroundColor: COLORS.white,
            ...styles.shadow,
          }}
          onPress={() => setSelectedCategory(item)}
        >
          <Image
            source={item.icon}
            style={{ width: 20, height: 20, tintColor: item.color }}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.primary,
              ...FONTS.h4,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
        <Animated.View style={{ height: categoryListHeightAnimationValue }}>
          <FlatList
            data={categories}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
          />
        </Animated.View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: SIZES.base,
            justifyContent: "center",
          }}
          onPress={() => {
            if (showMoreToggle) {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 115,
                duration: 300,
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 172.5,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }

            setShowMoreToggle(!showMoreToggle);
          }}
        >
          <Text style={{ ...FONTS.body4 }}>
            {showMoreToggle ? "LESS" : "MORE"}
          </Text>
          <Image
            source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
            style={{
              marginLeft: 5,
              width: 15,
              height: 15,
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderIncomingExpensesTitle() {
    return (
      <View
        style={{ padding: SIZES.padding, backgroundColor: COLORS.lightGray }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.primary }}>
          INCOMING EXPENSES
        </Text>
        <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
      </View>
    );
  }

  function renderIncomingExpenses() {
    let allExpenses = selectedCategory ? selectedCategory.expenses : [];

    let incomingExpenses = allExpenses.filter((a) => a.status === "P");

    const renderItem = ({ item, index }) => (
      <View
        style={{
          width: 300,
          marginRight: SIZES.padding,
          marginLeft: index === 0 ? SIZES.padding : 0,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: SIZES.radius,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: COLORS.lightGray,
              alignItems: "center",
              justifyContent: "center",
              marginRight: SIZES.base,
            }}
          >
            <Image
              source={selectedCategory.icon}
              style={{
                width: 30,
                height: 30,
                tintColor: selectedCategory.color,
              }}
            />
          </View>

          <Text style={{ ...FONTS.h3, color: selectedCategory.color }}>
            {selectedCategory.name}
          </Text>
        </View>

        <View style={{ paddingHorizontal: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
          <Text
            style={{ ...FONTS.body3, flexWrap: "wrap", color: COLORS.darkgray }}
          >
            {item.description}
          </Text>

          <Text style={{ marginTop: SIZES.padding, ...FONTS.h4 }}>
            Location
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.pin}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                marginBottom: SIZES.base,
                color: COLORS.darkgray,
                ...FONTS.body4,
              }}
            >
              {item.location}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderBottomStartRadius: SIZES.radius,
            borderBottomEndRadius: SIZES.radius,
            backgroundColor: selectedCategory.color,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
            CONFIRM {item.total.toFixed(2)} USD
          </Text>
        </View>
      </View>
    );

    return (
      <View>
        {renderIncomingExpensesTitle()}

        {incomingExpenses.length > 0 && (
          <FlatList
            data={incomingExpenses}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}

        {incomingExpenses.length == 0 && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 300,
            }}
          >
            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
              No Record
            </Text>
          </View>
        )}
      </View>
    );
  }

  function processCategoryDataToDisplay() {
    let chartData = categories.map((item) => {
      let confirmExpenses = item.expenses.filter((a) => a.status === "C");
      var total = confirmExpenses.reduce(
        (ac, curr) => ac + (curr.total || 0),
        0
      );

      return {
        id: item.id,
        y: total,
        name: item.name,
        expenseCount: confirmExpenses.length,
        color: item.color,
      };
    });

    let filterChartData = chartData.filter((a) => a.y > 0);

    let totalExpense = filterChartData.reduce(
      (ac, curr) => ac + (curr.y || 0),
      0
    );

    let finalChartData = filterChartData.map((item) => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0);
      return {
        id: item.id,
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
      };
    });

    return finalChartData;
  }

  function renderChart() {
    let chartData = processCategoryDataToDisplay();
    let colorScales = chartData.map((item) => item.color);
    let totalExpenseCount = chartData.reduce(
      (a, b) => a + (b.expenseCount || 0),
      0
    );

    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPie
          data={chartData}
          colorScale={colorScales}
          labels={({ datum }) => `${datum.y}`}
          radius={SIZES.width * 0.4 - 10}
          innerRadius={70}
          labelRadius={({ innerRadius }) =>
            (SIZES.width * 0.4 + innerRadius) / 2.5
          }
          style={{
            labels: { fill: COLORS.white, ...FONTS.body3 },
            parent: {
              ...styles.shadow,
            },
          }}
          width={SIZES.width * 0.8}
          height={SIZES.width * 0.8}
        />

        <View style={{ position: "absolute" }}>
          <Text style={{ ...FONTS.h1, textAlign: "center" }}>
            {totalExpenseCount}
          </Text>
          <Text style={{ ...FONTS.body4, textAlign: "center" }}>Expenses</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {renderNavBar()}

      {renderHeader()}

      {renderCategoryHeaderSection()}

      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {viewMode === "list" && (
          <View>
            {renderCategoryList()}
            {renderIncomingExpenses()}
          </View>
        )}
        {viewMode === "chart" && <View>{renderChart()}</View>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 3,
  },
});

export default Home;
