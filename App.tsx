import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from './utils/api-helpers/axios-api';
import {isEmpty} from './utils/common-helper';

const App = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    fetchProducts().then();
  }, []);

  const fetchProducts = async () => {
    const response = await getRequest('https://fakestoreapi.com/products');

    if (response.length > 0) {
      setProducts(response);
    }
  };

  const ProductListItem = ({product}: any) => {
    return (
      <>
        <View style={styles.flatList}>
          <Image
            source={{uri: product.image}}
            height={50}
            width={50}
            style={{borderRadius: 20}}
          />
          <View style={{flexDirection: 'column', marginStart: 10}}>
            <Text style={{fontSize: 20}}>
              {!product || isEmpty(product.title) ? '-' : product.title}
            </Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>₹ {product.price}</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <View style={{backgroundColor: '#FFFFFF'}}>
        {products.length > 0 && (
          <FlatList
            data={products}
            renderItem={({item}: any) => <ProductListItem product={item} />}
            keyExtractor={(item: any) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{height: 2, backgroundColor: '#000000'}} />
            )}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
    backgroundColor: '#70a1ff',
    marginVertical: 10,
    marginHorizontal: 16,
    paddingBottom: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0000FF',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5, // Only for Android
  },
  price: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    maxWidth: '95%',
    marginVertical: 10,
  },
});

export default App;
