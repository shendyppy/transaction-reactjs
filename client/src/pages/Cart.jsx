import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/Loading";
import GameCard from "../components/GameCard";
import { fetchCart } from "../stores/cart/action";

import NoDataFound from "../components/NoDataFound";
import Error from "../components/Error";

function Cart() {
	const dispatch = useDispatch();

	const { carts, loading, error } = useSelector((state) => state.carts);

	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);

	return (
		<>
			{error && <Error />}
			{loading && <Loading />}

			{carts.length === 0 ? (
				<NoDataFound />
			) : (
				<>
					<div style={{ minHeight: "800px" }}>
						<h1 className="text-center text-3xl font-bold mt-10">Your Cart</h1>
						<div className="container mx-auto text-center mt-10 mb-10">
							<div className="grid grid-cols-2 ml-10 mr-10">
								{carts?.map((cart, index) => {
									return <GameCard cart={cart} key={index} isCart={true} />;
								})}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Cart;
