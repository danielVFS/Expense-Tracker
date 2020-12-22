import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

import categoriesData from "../data/categories";

const Home = () => {
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
    const [categories, setCategories] = useState(categoriesData);
    const [viewMode, setViewMode] = useState("chart");

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

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {renderNavBar()}

      {renderHeader()}

      {renderCategoryHeaderSection()}
    </View>
  );
};

export default Home;
