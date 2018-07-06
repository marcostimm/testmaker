<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{

    public $response;

    public function setUp() {

        $client = new \GuzzleHttp\Client();
        $this->response = $client->request('POST', env('APP_URL') . '/api/auth/login', [
            'form_params' => [
                'email'     => env('EMAIL_TEST'),
                'password'  => env('PASS_TEST')
            ]
        ]);

    }

    /** @test */
    public function LoginPost()
    {
        $this->assertEquals($this->response->getStatusCode(), 200);
    }

    /** @test */
    public function LoginResponseTypeJson()
    {
        $content = $this->response->getBody()->getContents();
        $jsonContent = json_decode($content);
        $this->assertTrue(json_last_error() == JSON_ERROR_NONE);
    }

    /** @test */
    public function LoginHasAResult()
    {
        $content = $this->response->getBody()->getContents();
        $jsonObject = json_decode($content);
        $this->assertObjectHasAttribute('result', $jsonObject);
    }

    /** @test */
    public function LoginHasAResultWithToken()
    {
        $content = $this->response->getBody()->getContents();
        $jsonObject = json_decode($content);
        $this->assertObjectHasAttribute('token', $jsonObject->result);
    }

}
