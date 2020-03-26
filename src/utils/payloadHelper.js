function buildPayload(categoryId, pageNumber = null) {
  return {
    categoryId,
    manufacturerId: '0',
    vendorId: '0',
    priceRangeFilterModel7Spikes: {
      CategoryId: categoryId,
      ManufacturerId: '0',
      VendorId: '0',
      SelectedPriceRange: {},
      MinPrice: '79',
      MaxPrice: '1299'
    },
    specificationFiltersModel7Spikes: {
      CategoryId: categoryId,
      ManufacturerId: '0',
      VendorId: '0',
      SpecificationFilterGroups: [
        {
          Id: 25,
          FilterItems: [
            {
              Id: '210',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '390',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '226',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '187',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2214',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '422',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2196',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2195',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2197',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2220',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2217',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 363,
          FilterItems: [
            {
              Id: '2204',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2202',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2219',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2206',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2207',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2208',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2203',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2200',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2201',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2199',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2209',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 364,
          FilterItems: [
            {
              Id: '2210',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2211',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 365,
          FilterItems: [
            {
              Id: '2213',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '2212',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 1,
          FilterItems: [
            {
              Id: '1',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 23,
          FilterItems: [
            {
              Id: '186',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '302',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '384',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 27,
          FilterItems: [
            {
              Id: '227',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '365',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '219',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 2,
          FilterItems: [
            {
              Id: '4',
              FilterItemState: 'Unchecked'
            },
            {
              Id: '5',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 3,
          FilterItems: [
            {
              Id: '7',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 26,
          FilterItems: [
            {
              Id: '188',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 330,
          FilterItems: [
            {
              Id: '1845',
              FilterItemState: 'Unchecked'
            }
          ]
        },
        {
          Id: 240,
          FilterItems: [
            {
              Id: '2097',
              FilterItemState: 'Unchecked'
            }
          ]
        }
      ]
    },
    pageNumber: pageNumber,
    orderby: 'Position',
    viewmode: 'grid',
    pagesize: '48',
    queryString: '',
    shouldNotStartFromFirstPage: false,
    keyword: '',
    searchCategoryId: '0',
    searchManufacturerId: '0',
    searchVendorId: '0',
    priceFrom: '0',
    priceTo: '0',
    includeSubcategories: 'False',
    searchInProductDescriptions: 'False',
    advancedSearch: 'False',
    isOnSearchPage: 'False'
  };
}
module.exports = { buildPayload };
