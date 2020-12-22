import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

import categoriesData from "../data/categories";

const Home = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [viewMode, setViewMode] = useState("chart");
  const [selectedCategory, setSelectedCategory] = useState(null);

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
        <View>
          <FlatList
            data={categories}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {renderNavBar()}

      {renderHeader()}

      {renderCategoryHeaderSection()}

      <SafeAreaView style={{ paddingBottom: 60 }}>
        {viewMode === "list" && <View>{renderCategoryList()}</View>}
      </SafeAreaView>
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
