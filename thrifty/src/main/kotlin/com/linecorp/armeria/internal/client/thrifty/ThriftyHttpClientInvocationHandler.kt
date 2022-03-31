package com.linecorp.armeria.internal.client.thrifty

import com.linecorp.armeria.client.ClientBuilderParams
import com.linecorp.armeria.client.thrift.THttpClient
import com.linecorp.armeria.common.util.AbstractUnwrappable
import java.lang.reflect.InvocationHandler
import java.lang.reflect.Method

class ThriftyHttpClientInvocationHandler internal constructor(
    private val params: ClientBuilderParams,
    thriftClient: THttpClient
) :
    AbstractUnwrappable<THttpClient>(thriftClient), InvocationHandler,
    ClientBuilderParams by params {
    override fun invoke(proxy: Any, method: Method, args: Array<Any>): Any {
        val declaringClass = method.declaringClass
        if (declaringClass == Any::class.java) {
            // Handle the methods in Object
            return invokeObjectMethod(proxy, method, args)
        }

        require(declaringClass == params.clientType())
        // Handle the methods in the interface.
        // Handle the methods in the interface.
        return invokeClientMethod(method, args)
    }

    private fun invokeClientMethod(method: Method, args: Array<Any>): Any {
        TODO("Not yet implemented")
    }

    private fun invokeObjectMethod(proxy: Any, method: Method, args: Array<Any>): Any {
        return when (val methodName = method.name) {
            "toString" -> params.clientType().simpleName + '(' + uri().rawPath + ')'
            "hashCode" -> System.identityHashCode(proxy)
            "equals" -> proxy === args[0]
            else -> throw Error("unknown method: $methodName")
        }
    }
}
